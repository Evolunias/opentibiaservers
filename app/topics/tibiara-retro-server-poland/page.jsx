import TibiaraRetroServerPolandKeywordPage, { generateMetadata } from './tibiara-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRetroServerPolandKeywordPage />;
}
