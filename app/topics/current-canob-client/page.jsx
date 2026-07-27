import CurrentCanobClientKeywordPage, { generateMetadata } from './current-canob-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobClientKeywordPage />;
}
