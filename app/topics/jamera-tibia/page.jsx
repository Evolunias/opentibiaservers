import JameraTibiaKeywordPage, { generateMetadata } from './jamera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraTibiaKeywordPage />;
}
