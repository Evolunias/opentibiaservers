import CustomThorniaTibiaKeywordPage, { generateMetadata } from './custom-thornia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThorniaTibiaKeywordPage />;
}
