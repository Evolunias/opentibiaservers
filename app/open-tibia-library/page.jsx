import OpenTibiaLibraryPage, { generateMetadata } from './open-tibia-library';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaLibraryPage />;
}
