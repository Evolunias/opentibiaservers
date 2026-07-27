import CurrentBlazeraTibiaKeywordPage, { generateMetadata } from './current-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraTibiaKeywordPage />;
}
