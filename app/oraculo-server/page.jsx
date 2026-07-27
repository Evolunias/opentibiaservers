import OraculoServerPage, { generateMetadata } from './oraculo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OraculoServerPage />;
}
