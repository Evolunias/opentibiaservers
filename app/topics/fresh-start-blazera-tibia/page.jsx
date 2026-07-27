import FreshStartBlazeraTibiaKeywordPage, { generateMetadata } from './fresh-start-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraTibiaKeywordPage />;
}
