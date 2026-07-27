import CurrentOlderaTibiaKeywordPage, { generateMetadata } from './current-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaTibiaKeywordPage />;
}
