import ChimeraPage, { generateMetadata } from './chimera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ChimeraPage />;
}
