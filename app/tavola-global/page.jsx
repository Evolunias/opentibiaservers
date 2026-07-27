import TavolaGlobalPage, { generateMetadata } from './tavola-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TavolaGlobalPage />;
}
