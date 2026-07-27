import CustomEvoleraTibiaKeywordPage, { generateMetadata } from './custom-evolera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoleraTibiaKeywordPage />;
}
