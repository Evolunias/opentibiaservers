import KnightwatchPage, { generateMetadata } from './knightwatch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KnightwatchPage />;
}
