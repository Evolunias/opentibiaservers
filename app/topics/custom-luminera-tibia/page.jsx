import CustomLumineraTibiaKeywordPage, { generateMetadata } from './custom-luminera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomLumineraTibiaKeywordPage />;
}
