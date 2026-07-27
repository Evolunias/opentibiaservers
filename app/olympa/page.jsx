import OlympaPage, { generateMetadata } from './olympa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlympaPage />;
}
