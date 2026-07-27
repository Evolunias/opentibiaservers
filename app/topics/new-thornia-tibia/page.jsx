import NewThorniaTibiaKeywordPage, { generateMetadata } from './new-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaTibiaKeywordPage />;
}
