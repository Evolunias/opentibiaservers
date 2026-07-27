import CurrentElderaTibiaKeywordPage, { generateMetadata } from './current-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaTibiaKeywordPage />;
}
