import TopThorniaTibiaKeywordPage, { generateMetadata } from './top-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaTibiaKeywordPage />;
}
