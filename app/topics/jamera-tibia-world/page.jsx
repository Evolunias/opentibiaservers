import JameraTibiaWorldKeywordPage, { generateMetadata } from './jamera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraTibiaWorldKeywordPage />;
}
