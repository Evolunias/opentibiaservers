import CurrentAmeriaTibiaKeywordPage, { generateMetadata } from './current-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaTibiaKeywordPage />;
}
