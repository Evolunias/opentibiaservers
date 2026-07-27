import CustomEvoluniaTibiaKeywordPage, { generateMetadata } from './custom-evolunia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaTibiaKeywordPage />;
}
