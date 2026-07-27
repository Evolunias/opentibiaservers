import TibiaTalesPage, { generateMetadata } from './tibia-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaTalesPage />;
}
