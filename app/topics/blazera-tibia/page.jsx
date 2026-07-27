import BlazeraTibiaKeywordPage, { generateMetadata } from './blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraTibiaKeywordPage />;
}
