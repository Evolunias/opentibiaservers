import NewDemolidoresTibiaKeywordPage, { generateMetadata } from './new-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresTibiaKeywordPage />;
}
