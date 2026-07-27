import TibiaPvpServerUsaKeywordPage, { generateMetadata } from './tibia-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPvpServerUsaKeywordPage />;
}
