import FideraTibiaKeywordPage, { generateMetadata } from './fidera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraTibiaKeywordPage />;
}
