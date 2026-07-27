import OlderaPvpServerUsaKeywordPage, { generateMetadata } from './oldera-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaPvpServerUsaKeywordPage />;
}
