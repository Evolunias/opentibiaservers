import CustomClassickDrakoriaTibiaKeywordPage, { generateMetadata } from './custom-classick-drakoria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassickDrakoriaTibiaKeywordPage />;
}
