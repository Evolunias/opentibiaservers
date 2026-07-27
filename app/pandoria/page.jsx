import PandoriaPage, { generateMetadata } from './pandoria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PandoriaPage />;
}
