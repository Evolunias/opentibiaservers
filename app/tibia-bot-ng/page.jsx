import TibiaBotNgPage, { generateMetadata } from './tibia-bot-ng';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaBotNgPage />;
}
