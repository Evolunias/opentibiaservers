import OlderaRetroServerCanadaKeywordPage, { generateMetadata } from './oldera-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaRetroServerCanadaKeywordPage />;
}
