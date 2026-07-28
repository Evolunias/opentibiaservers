import OpentibiaLibraryPage, { generateMetadata } from './opentibia-library';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpentibiaLibraryPage />;
}
