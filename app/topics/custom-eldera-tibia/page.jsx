import CustomElderaTibiaKeywordPage, { generateMetadata } from './custom-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaTibiaKeywordPage />;
}
