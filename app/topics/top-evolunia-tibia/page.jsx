import TopEvoluniaTibiaKeywordPage, { generateMetadata } from './top-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaTibiaKeywordPage />;
}
