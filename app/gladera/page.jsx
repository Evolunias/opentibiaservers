import GladeraPage, { generateMetadata } from './gladera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GladeraPage />;
}
