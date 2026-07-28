import TibiabotNgPage, { generateMetadata } from './tibiabot-ng';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiabotNgPage />;
}
