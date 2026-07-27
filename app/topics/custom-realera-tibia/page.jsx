import CustomRealeraTibiaKeywordPage, { generateMetadata } from './custom-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraTibiaKeywordPage />;
}
