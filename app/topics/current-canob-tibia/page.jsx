import CurrentCanobTibiaKeywordPage, { generateMetadata } from './current-canob-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobTibiaKeywordPage />;
}
