import NewDemolidoresOpenTibiaKeywordPage, { generateMetadata } from './new-demolidores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresOpenTibiaKeywordPage />;
}
