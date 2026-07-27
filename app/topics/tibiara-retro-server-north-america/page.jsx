import TibiaraRetroServerNorthAmericaKeywordPage, { generateMetadata } from './tibiara-retro-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRetroServerNorthAmericaKeywordPage />;
}
