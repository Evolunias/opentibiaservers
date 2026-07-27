import IsaraTibiaKeywordPage, { generateMetadata } from './isara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaraTibiaKeywordPage />;
}
