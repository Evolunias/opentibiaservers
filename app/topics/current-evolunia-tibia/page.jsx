import CurrentEvoluniaTibiaKeywordPage, { generateMetadata } from './current-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoluniaTibiaKeywordPage />;
}
