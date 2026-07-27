import TibiaraRetroServerUsaKeywordPage, { generateMetadata } from './tibiara-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRetroServerUsaKeywordPage />;
}
