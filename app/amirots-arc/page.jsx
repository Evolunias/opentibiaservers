import AmirotsArcPage, { generateMetadata } from './amirots-arc';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmirotsArcPage />;
}
