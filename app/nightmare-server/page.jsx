import NightmareServerPage, { generateMetadata } from './nightmare-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NightmareServerPage />;
}
