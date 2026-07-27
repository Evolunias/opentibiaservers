import NewOlderaTibiaKeywordPage, { generateMetadata } from './new-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaTibiaKeywordPage />;
}
