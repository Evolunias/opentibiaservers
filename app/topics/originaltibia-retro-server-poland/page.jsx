import OriginaltibiaRetroServerPolandKeywordPage, { generateMetadata } from './originaltibia-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaRetroServerPolandKeywordPage />;
}
