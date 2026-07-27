import CustomEternalOdysseyLoginKeywordPage, { generateMetadata } from './custom-eternal-odyssey-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEternalOdysseyLoginKeywordPage />;
}
