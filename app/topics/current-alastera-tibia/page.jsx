import CurrentAlasteraTibiaKeywordPage, { generateMetadata } from './current-alastera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraTibiaKeywordPage />;
}
