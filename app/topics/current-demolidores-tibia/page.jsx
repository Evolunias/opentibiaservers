import CurrentDemolidoresTibiaKeywordPage, { generateMetadata } from './current-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresTibiaKeywordPage />;
}
