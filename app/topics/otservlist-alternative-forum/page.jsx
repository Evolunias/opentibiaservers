import OtservlistAlternativeForumKeywordPage, { generateMetadata } from './otservlist-alternative-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistAlternativeForumKeywordPage />;
}
