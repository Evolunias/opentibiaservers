import OlderaRetroServerUkKeywordPage, { generateMetadata } from './oldera-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaRetroServerUkKeywordPage />;
}
