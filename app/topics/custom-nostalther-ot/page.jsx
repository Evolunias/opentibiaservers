import CustomNostaltherOtKeywordPage, { generateMetadata } from './custom-nostalther-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNostaltherOtKeywordPage />;
}
